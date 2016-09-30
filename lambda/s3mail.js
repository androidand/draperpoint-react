var AWS = require('aws-sdk');
var s3 = new AWS.S3();
 
var bucketName = 'draperpoint-mail';
 
exports.handler = function(event, context, callback) {
    console.log('Process email');
    
    //console.log("event Records Sns:\n",event.Records[0]['Sns']);
    //console.log("Sns Message stringify:\n",JSON.stringify(event.Records[0]['Sns']['Message'], null, 2));
    //console.log("Sns Message parse:\n",JSON.parse(event.Records[0]['Sns']['Message']));

    snsMessage = JSON.parse(event.Records[0]['Sns']['Message']);
    console.log("mess: ",snsMessage);
    mId = snsMessage['mail']['messageId'];
    console.log("messageId is: ", mId);
    
    // Retrieve the email from your bucket
    s3.getObject({
            Bucket: bucketName,
            Key: mId
        }, function(err, data) {
            if (err) {
                console.log(err, err.stack);
                callback(err);
            } else {
                //console.log("Raw email:\n" + data.Body);
                
                // Custom email processing goes here
                
/* Verify no SPAM                
            var msgInfo = JSON.parse(event.Records[0].Sns.Message);
            // don't process spam messages
            if (msgInfo.receipt.spamVerdict.status === 'FAIL' || msgInfo.receipt.virusVerdict.status === 'FAIL') {
                console.log('Message is spam or contains virus, ignoring.');
                context.succeed();
            }
 
            var email = msgInfo.content;
*/
                

var dataBody = JSON.stringify(data.Body);
// load AWS SES
var ses = new AWS.SES({apiVersion: '2010-12-01'});
// send to list
//var to = ['tantonet@gmail.com'];
// It complains this needs to be a string
var to = 'tantonet@gmail.com';
// this must relate to a verified SES account
var from = 'info@draperpoint.net';


var params = {
  Destination: { /* required */
    BccAddresses: [
      //'STRING_VALUE',
      /* more items */
    ],
    CcAddresses: [
      //'STRING_VALUE',
      /* more items */
    ],
    ToAddresses: [
      to,
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
        Data: dataBody, /* required */
        //Charset: 'STRING_VALUE'
      },
      Text: {
        Data: dataBody, /* required */
        //Charset: 'STRING_VALUE'
      }
    },
    Subject: { /* required */
      Data: 'Testing System', /* required */
      //Charset: 'STRING_VALUE'
    }
  },
  Source: from, /* required */
  ReplyToAddresses: [
    from,
    /* more items */
  ],
  //ReturnPath: 'STRING_VALUE',
  //ReturnPathArn: 'STRING_VALUE',
  //SourceArn: 'STRING_VALUE'
};
ses.sendEmail(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});       
                
                
                
                
                
                
                callback(null, null);
            }
        });
};