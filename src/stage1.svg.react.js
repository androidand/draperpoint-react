import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="500mm" height="210mm" viewBox="0 0 500 210" {...this.props}><path d="M173.188 101h178.556l151.605 73.431H-2z" fill="#ac9393" /><path fill="#483737" d="M0 172h500v38H0z" /><ellipse cx="258.296" cy="-116.609" rx="53.663" ry="7.531" transform="scale(1 -1)" fill="#917c6f" /><ellipse cx="152.793" cy="139.928" rx="47.558" ry="7.336" fill="#917c6f" /><ellipse cx="378.188" cy="139.169" rx="42.752" ry="6.071" fill="#917c6f" /><ellipse cx="267.388" cy="158.394" rx="48.317" ry="7.083" fill="#917c6f" /><path d="M252.186 117.065c-1.492-.578-2.674-1.876-3.011-3.309-.135-.57-.199-12.251-.2-36.323V41.952h-1.513v13.393c0 13.13-.007 13.41-.39 14.204-.497 1.029-1.054 1.51-2.145 1.855-1.612.508-3.375-.463-4.009-2.207-.407-1.123-.38-31.062.03-32.918.924-4.183 3.917-7.61 7.408-8.482 1.84-.46 18.842-.465 20.676-.007 1.868.467 3.472 1.522 4.891 3.218 1.46 1.745 2.142 3.16 2.65 5.504.355 1.633.374 2.508.374 16.734 0 13.004-.039 15.12-.29 15.831-.392 1.105-.795 1.602-1.694 2.089-1.493.807-3.39.288-4.272-1.17l-.453-.75-.052-13.648-.051-13.646h-1.504v35.655c0 39.086.075 36.49-1.097 37.946-.925 1.15-1.87 1.585-3.44 1.585-1.569 0-2.513-.435-3.438-1.585-1.15-1.427-1.097-.32-1.097-23.24V71.362h-1.512v20.95c0 17.074-.048 21.084-.255 21.668-.381 1.071-1.21 2.127-2.079 2.65-.838.504-2.74.739-3.527.435zm4.252-91.766c-2.285-.962-3.697-2.445-4.697-4.932-.553-1.376-.593-1.64-.593-3.931 0-2.318.034-2.538.611-3.92 2.881-6.898 11.2-6.915 14.075-.028.596 1.426.623 1.606.623 4.06 0 2.359-.042 2.669-.528 3.834-.816 1.959-2.02 3.386-3.666 4.345-1.278.745-1.602.837-3.151.9-1.3.053-1.961-.028-2.674-.328zM146.675 142.33c-1.326-.71-2.376-2.307-2.676-4.07-.12-.702-.176-15.072-.177-44.686V49.923h-1.344V66.4c0 16.153-.007 16.497-.348 17.474-.44 1.266-.936 1.859-1.905 2.282-1.433.625-3-.569-3.562-2.715-.362-1.381-.339-38.213.026-40.497.821-5.146 3.48-9.363 6.583-10.435 1.634-.566 16.742-.573 18.372-.009 1.66.574 3.085 1.873 4.346 3.96 1.297 2.146 1.903 3.888 2.355 6.77.314 2.01.332 3.086.332 20.588 0 15.998-.035 18.601-.258 19.476-.348 1.359-.707 1.97-1.506 2.569-1.326.994-3.01.354-3.795-1.44l-.403-.923-.046-16.789-.046-16.788h-1.336v43.865c0 48.085.067 44.892-.974 46.683-.823 1.414-1.662 1.95-3.056 1.95-1.395 0-2.234-.536-3.056-1.95-1.021-1.756-.975-.395-.975-28.592V86.104h-1.344v25.775c0 21.005-.042 25.938-.226 26.657-.338 1.317-1.074 2.617-1.847 3.26-.745.62-2.435.908-3.134.534zm3.778-112.894c-2.03-1.184-3.285-3.008-4.174-6.068-.491-1.693-.527-2.018-.527-4.836 0-2.851.031-3.122.544-4.822 2.56-8.487 9.95-8.508 12.506-.035.53 1.755.554 1.976.554 4.994 0 2.903-.038 3.284-.47 4.718-.724 2.41-1.795 4.166-3.257 5.345-1.136.916-1.424 1.03-2.8 1.108-1.155.065-1.743-.035-2.376-.404zM372.07 140.307c-1.554-.707-2.785-2.298-3.137-4.055-.14-.7-.207-15.016-.208-44.519V48.245h-1.576v16.416c0 16.093-.008 16.436-.407 17.409-.517 1.26-1.098 1.852-2.234 2.273-1.68.623-3.517-.567-4.176-2.705-.425-1.376-.397-38.07.03-40.345.963-5.127 4.081-9.328 7.718-10.397 1.916-.563 19.63-.57 21.54-.008 1.946.572 3.617 1.866 5.096 3.945 1.521 2.139 2.231 3.873 2.76 6.745.37 2.002.39 3.074.39 20.51 0 15.939-.04 18.533-.303 19.403-.408 1.355-.828 1.964-1.764 2.56-1.555.99-3.53.353-4.45-1.434l-.473-.92-.054-16.726-.053-16.726H389.202v43.702c0 47.905.079 44.724-1.142 46.508-.965 1.409-1.948 1.942-3.583 1.942-1.636 0-2.62-.533-3.583-1.942-1.197-1.75-1.143-.394-1.143-28.485V84.292H378.176v25.678c0 20.926-.05 25.84-.266 26.557-.397 1.313-1.26 2.607-2.165 3.248-.873.618-2.856.905-3.675.532zm4.43-112.472c-2.38-1.18-3.852-2.997-4.893-6.045-.577-1.687-.618-2.01-.618-4.818 0-2.84.035-3.11.636-4.803 3.002-8.456 11.667-8.477 14.664-.035.62 1.748.649 1.968.649 4.975 0 2.891-.045 3.271-.55 4.7-.85 2.4-2.105 4.15-3.82 5.325-1.331.913-1.67 1.026-3.283 1.104-1.354.065-2.043-.035-2.786-.403z" /><text style={{
        lineHeight: "125%"
      }} x="236.272" y="149.288" fontWeight="400" fontSize="11.289" fontFamily="sans-serif" letterSpacing="0" wordSpacing="0"><tspan x="236.272" y="149.288" style={{
          InkscapeFontSpecification: "'.Beirut PUA Bold'"
        }} fontSize="22.578" fontFamily=".Beirut PUA" fontWeight="700">YOU?</tspan></text></svg>;
  }

}