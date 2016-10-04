import React from "react";
import Giovanni from './Giovanni.js';
import Andreas from './Andreas.js';
import Enkish from './Enkish.js';

export default class SVG extends React.Component {

  handleClick( e ) {
    console.log( "click", e );
  }

  render() {
    return <svg
                xmlns="http://www.w3.org/2000/svg"
                id="stage"
                width="500mm"
                height="210mm"
                viewBox="0 0 500 200"
                {...this.props}>

            <filter id="blur-filter" x="-2" y="-2" width="200" height="200">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>

            <path
                  d="M174 50h180l150 130H-2z"
                  fill="#633C3C" />
            <path
                  fill="#472A2A"
                  d="M0 180h500v50H0z" />

            <ellipse 
                      id="giovanni"
                      cx="265"
                      cy="85"
                      rx="80"
                      ry="30"
                      fill="#917c6f" />

            <ellipse 
                      id="enkish"
                      cx="145"
                      cy="144"
                      rx="45"
                      ry="25"
                      fill="#917c6f" />

            <ellipse 
                      id="andreas"
                      cx="380"
                      cy="145"
                      rx="45"
                      ry="25"
                      fill="#917c6f" />

            <ellipse 
                      id="you"
                      cx="265"
                      cy="160"
                      rx="60"
                      ry="35"
                      fill="#917c6f" />
             

             <g transform="translate(180,-30) rotate(0) scale(0.04)">
                 <Giovanni />
             </g>

             <g transform="translate(240,-40) rotate(0) scale(0.05)">
                  <Andreas />
             </g>

             <g transform="translate(100,-10) rotate(0) scale(0.05)">
                  <Enkish />
             </g>

             <text
                   style={ { lineHeight: "125%" } }
                   x="237"
                   y="155"
                   fontWeight="400"
                   fontSize="10"
                   fontFamily="sans-serif"
                   letterSpacing="0"
                   wordSpacing="0">
               <tspan
                      x="220"
                      y="155"
                      style={ { InkscapeFontSpecification: "'.Beirut PUA Bold'" } }
                      fontSize="23"
                      fontFamily=".Beirut PUA"
                      fontWeight="700">
                 Din plats?
               </tspan>
             </text>
           </svg>;
  }
}


//Formatted with 
//http://royriojas.com/resources/esformatter-jsx/#%7B%22config%22%3A%7B%22jsx%22%3A%7B%22attrsOnSameLineAsTag%22%3Afalse%2C%22maxAttrsOnTag%22%3A1%2C%22firstAttributeOnSameLine%22%3Afalse%2C%22alignWithFirstAttribute%22%3Atrue%7D%7D%2C%22code%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnexport%20default%20class%20SVG%20extends%20React.Component%20%7B%5Cn%5Cn%20%20handleClick(e)%20%7B%5Cn%20%20%20%20console.log(%5C%22click%5C%22%2C%20e)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20%3Csvg%5Cn%20%20%20%20%5Ctxmlns%3D%5C%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%5C%22%20id%3D%5C%22stage%5C%22%20width%3D%5C%22500mm%5C%22%20height%3D%5C%22210mm%5C%22%20viewBox%3D%5C%220%200%20500%20210%5C%22%20%7B...this.props%7D%3E%3Cpath%20d%3D%5C%22M173.188%20101h178.556l151.605%2073.431H-2z%5C%22%20fill%3D%5C%22%23ac9393%5C%22%20%2F%3E%3Cpath%20fill%3D%5C%22%23483737%5C%22%20d%3D%5C%22M0%20172h500v38H0z%5C%22%20%2F%3E%3Cellipse%20cx%3D%5C%22258.296%5C%22%20cy%3D%5C%22-116.609%5C%22%20rx%3D%5C%2253.663%5C%22%20ry%3D%5C%227.531%5C%22%20transform%3D%5C%22scale(1%20-1)%5C%22%20fill%3D%5C%22%23917c6f%5C%22%20%2F%3E%3Cellipse%20cx%3D%5C%22152.793%5C%22%20cy%3D%5C%22139.928%5C%22%20rx%3D%5C%2247.558%5C%22%20ry%3D%5C%227.336%5C%22%20fill%3D%5C%22%23917c6f%5C%22%20%2F%3E%3Cellipse%20cx%3D%5C%22378.188%5C%22%20cy%3D%5C%22139.169%5C%22%20rx%3D%5C%2242.752%5C%22%20ry%3D%5C%226.071%5C%22%20fill%3D%5C%22%23917c6f%5C%22%20%2F%3E%3Cellipse%20cx%3D%5C%22267.388%5C%22%20cy%3D%5C%22158.394%5C%22%20rx%3D%5C%2248.317%5C%22%20ry%3D%5C%227.083%5C%22%20fill%3D%5C%22%23917c6f%5C%22%20%2F%3E%3Cpath%20d%3D%5C%22M252.186%20117.065c-1.492-.578-2.674-1.876-3.011-3.309-.135-.57-.199-12.251-.2-36.323V41.952h-1.513v13.393c0%2013.13-.007%2013.41-.39%2014.204-.497%201.029-1.054%201.51-2.145%201.855-1.612.508-3.375-.463-4.009-2.207-.407-1.123-.38-31.062.03-32.918.924-4.183%203.917-7.61%207.408-8.482%201.84-.46%2018.842-.465%2020.676-.007%201.868.467%203.472%201.522%204.891%203.218%201.46%201.745%202.142%203.16%202.65%205.504.355%201.633.374%202.508.374%2016.734%200%2013.004-.039%2015.12-.29%2015.831-.392%201.105-.795%201.602-1.694%202.089-1.493.807-3.39.288-4.272-1.17l-.453-.75-.052-13.648-.051-13.646h-1.504v35.655c0%2039.086.075%2036.49-1.097%2037.946-.925%201.15-1.87%201.585-3.44%201.585-1.569%200-2.513-.435-3.438-1.585-1.15-1.427-1.097-.32-1.097-23.24V71.362h-1.512v20.95c0%2017.074-.048%2021.084-.255%2021.668-.381%201.071-1.21%202.127-2.079%202.65-.838.504-2.74.739-3.527.435zm4.252-91.766c-2.285-.962-3.697-2.445-4.697-4.932-.553-1.376-.593-1.64-.593-3.931%200-2.318.034-2.538.611-3.92%202.881-6.898%2011.2-6.915%2014.075-.028.596%201.426.623%201.606.623%204.06%200%202.359-.042%202.669-.528%203.834-.816%201.959-2.02%203.386-3.666%204.345-1.278.745-1.602.837-3.151.9-1.3.053-1.961-.028-2.674-.328zM146.675%20142.33c-1.326-.71-2.376-2.307-2.676-4.07-.12-.702-.176-15.072-.177-44.686V49.923h-1.344V66.4c0%2016.153-.007%2016.497-.348%2017.474-.44%201.266-.936%201.859-1.905%202.282-1.433.625-3-.569-3.562-2.715-.362-1.381-.339-38.213.026-40.497.821-5.146%203.48-9.363%206.583-10.435%201.634-.566%2016.742-.573%2018.372-.009%201.66.574%203.085%201.873%204.346%203.96%201.297%202.146%201.903%203.888%202.355%206.77.314%202.01.332%203.086.332%2020.588%200%2015.998-.035%2018.601-.258%2019.476-.348%201.359-.707%201.97-1.506%202.569-1.326.994-3.01.354-3.795-1.44l-.403-.923-.046-16.789-.046-16.788h-1.336v43.865c0%2048.085.067%2044.892-.974%2046.683-.823%201.414-1.662%201.95-3.056%201.95-1.395%200-2.234-.536-3.056-1.95-1.021-1.756-.975-.395-.975-28.592V86.104h-1.344v25.775c0%2021.005-.042%2025.938-.226%2026.657-.338%201.317-1.074%202.617-1.847%203.26-.745.62-2.435.908-3.134.534zm3.778-112.894c-2.03-1.184-3.285-3.008-4.174-6.068-.491-1.693-.527-2.018-.527-4.836%200-2.851.031-3.122.544-4.822%202.56-8.487%209.95-8.508%2012.506-.035.53%201.755.554%201.976.554%204.994%200%202.903-.038%203.284-.47%204.718-.724%202.41-1.795%204.166-3.257%205.345-1.136.916-1.424%201.03-2.8%201.108-1.155.065-1.743-.035-2.376-.404zM372.07%20140.307c-1.554-.707-2.785-2.298-3.137-4.055-.14-.7-.207-15.016-.208-44.519V48.245h-1.576v16.416c0%2016.093-.008%2016.436-.407%2017.409-.517%201.26-1.098%201.852-2.234%202.273-1.68.623-3.517-.567-4.176-2.705-.425-1.376-.397-38.07.03-40.345.963-5.127%204.081-9.328%207.718-10.397%201.916-.563%2019.63-.57%2021.54-.008%201.946.572%203.617%201.866%205.096%203.945%201.521%202.139%202.231%203.873%202.76%206.745.37%202.002.39%203.074.39%2020.51%200%2015.939-.04%2018.533-.303%2019.403-.408%201.355-.828%201.964-1.764%202.56-1.555.99-3.53.353-4.45-1.434l-.473-.92-.054-16.726-.053-16.726H389.202v43.702c0%2047.905.079%2044.724-1.142%2046.508-.965%201.409-1.948%201.942-3.583%201.942-1.636%200-2.62-.533-3.583-1.942-1.197-1.75-1.143-.394-1.143-28.485V84.292H378.176v25.678c0%2020.926-.05%2025.84-.266%2026.557-.397%201.313-1.26%202.607-2.165%203.248-.873.618-2.856.905-3.675.532zm4.43-112.472c-2.38-1.18-3.852-2.997-4.893-6.045-.577-1.687-.618-2.01-.618-4.818%200-2.84.035-3.11.636-4.803%203.002-8.456%2011.667-8.477%2014.664-.035.62%201.748.649%201.968.649%204.975%200%202.891-.045%203.271-.55%204.7-.85%202.4-2.105%204.15-3.82%205.325-1.331.913-1.67%201.026-3.283%201.104-1.354.065-2.043-.035-2.786-.403z%5C%22%20%2F%3E%3Ctext%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20lineHeight%3A%20%5C%22125%25%5C%22%5Cn%20%20%20%20%20%20%7D%7D%20x%3D%5C%22236.272%5C%22%20y%3D%5C%22149.288%5C%22%20fontWeight%3D%5C%22400%5C%22%20fontSize%3D%5C%2211.289%5C%22%20fontFamily%3D%5C%22sans-serif%5C%22%20letterSpacing%3D%5C%220%5C%22%20wordSpacing%3D%5C%220%5C%22%3E%3Ctspan%20x%3D%5C%22236.272%5C%22%20y%3D%5C%22149.288%5C%22%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20InkscapeFontSpecification%3A%20%5C%22'.Beirut%20PUA%20Bold'%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%7D%20fontSize%3D%5C%2222.578%5C%22%20fontFamily%3D%5C%22.Beirut%20PUA%5C%22%20fontWeight%3D%5C%22700%5C%22%3EYOU%3F%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fsvg%3E%3B%5Cn%20%20%7D%5Cn%7D%22%7D

