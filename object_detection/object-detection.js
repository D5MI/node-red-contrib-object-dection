module.exports = function(RED){

    function ObjectDetectionNode(config){
        RED.nodes.createNode(this, config)
            var node = this;

    
            
        function HTML() {
            return require('./object-detection-html.js').code(config)
        }

            node.on('input', function(msg, send){
                
                console.log("here context");
                config.field = this.context().flow.get("registered");
                console.log("fninally? " + this.context().flow.get("registered"));
                msg.payload = HTML()
                send = send || function(){this.send.apply(this, arguments)}
                send(msg)
            })
    }

    RED.nodes.registerType("object-detection", ObjectDetectionNode);
}
