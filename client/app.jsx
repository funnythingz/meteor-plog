var New = ReactMeteor.createClass({
    templateName: "New",

    handleSubmit: function(e) {
        var content = React.findDOMNode(this.refs.iroContent).value.trim()
        Iros.insert({ content: content, createdAt: new Date()});
    },

    results: function() {
        return Iros.find({}, {sort: {createdAt: -1}});
    },

    render: function() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="mdi-editor-mode-edit prefix"></i>
                            <textarea id="iro_content" className="materialize-textarea" length="120" ref="iroContent"></textarea>
                            <label for="iro_content">Message</label>
                        </div>
                        <div className="input-field col s2">
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                                Post
                                <i className="mdi-content-send right"></i>
                            </button>
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
