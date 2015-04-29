Iros = new Meteor.Collection("iros");

var New = ReactMeteor.createClass({
    templateName: "New",

    render: function() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="mdi-editor-mode-edit prefix"></i>
                            <textarea id="iro_content" className="materialize-textarea" length="120"></textarea>
                            <label for="iro_content">Message</label>
                        </div>
                        <div className="input-field col s2">
                            <div className="btn waves-effect waves-light">
                                Post
                                <i className="mdi-content-send right"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

var IroIro = ReactMeteor.createClass({
    templateName: "IroIro",

    render: function() {
        return (
            <section className="iroiro">
            </section>
        );
    }
});

var Iro = ReactMeteor.createClass({
    templateName: "Iro",

    getMeteorState: function() {
        return {
            title: "Hello React"
        }
    },

    render: function() {
        return (
            <div className="col s1">
                <div className="card-panel blue">
                    <span className="white-text">
                        {this.state.title}
                    </span>
                </div>
            </div>
        );
    }
});
