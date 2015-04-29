var Hello = ReactMeteor.createClass({
    templateName: "hello",

    getMeteorState: function() {
        return {
            title: "try React",
            greeting: "hello"
        }
    },

    render: function() {
        return (
            <section className="hello">
                <h1>{this.state.title}</h1>
                <p>{this.state.greeting}</p>
            </section>
        )
    }
});
