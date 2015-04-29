var Iro = ReactMeteor.createClass({
    templateName: "Iro",

    getMeteorState: function() {
        return {
            title: "Hello React"
        }
    },

    render: function() {
        return (
            <section className="row">
                <div className="col s1">
                    <div className="card-panel blue">
                        <span className="white-text">
                            {this.state.title}
                        </span>
                    </div>
                </div>
            </section>
        )
    }
});
