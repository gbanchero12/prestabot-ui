import React, {Component} from 'react';

class KommunicateChat extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = {"appId":"173642b18712144add87097816088faeb","popupWidget":true,"automaticChatOpenOnNavigation":true,"botIds": ["prestabot-8smfl"]};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    }
    render(){
        return (
            <div></div>
        )
    }
}

export default KommunicateChat;
