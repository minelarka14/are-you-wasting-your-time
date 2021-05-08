import react from 'react'
import './App.css';

class App extends react.Component{
    constructor(props) {
        super(props);
        this.state = {
            inp: "",
            submit: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRetry = this.handleRetry.bind(this)
    }
    handleChange(e) {
        this.setState({
            inp: e.target.value
        })
    }
    handleSubmit(){
        this.setState({
            submit: true
        })
    }
    handleRetry(){
        this.setState({
            inp: '',
            submit: false
        })
    }
    render(){
        if (this.state.submit){
            return (
                <div className="App">
                    <div className={"retry-cont"}>
                        <p className={"text"}>{`Yes, you are wasting your time on ${this.state.inp}`}</p>
                        <form onSubmit={this.handleRetry} className={"main-form text"}>
                            <input type={"submit"} className={"inp"} value={`Retry`}/>
                        </form>
                    </div>
                    <div className={"credits"}>
                        made with &lt;3 by &nbsp;<a href={"https://github.com/minelarka14"}>minelarka14</a>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="App">
                    <div className={"main-cont"}>
                        <form onSubmit={this.handleSubmit} className={"main-form text"}>
                            <label className={"form-child text"}>Am I wasting my time on &nbsp;&nbsp;
                                <input type={"text"} className={"inp"} value={this.state.inp} onChange={this.handleChange}/>
                                &nbsp;?
                            </label>
                            <input type={"submit"} className={"inp"} value={`Are you wasting your time on ${this.state.inp} ?`}/>
                        </form>
                    </div>
                    <div className={"credits"}>
                        made with &lt;3 by &nbsp;<a href={"https://github.com/minelarka14"}>minelarka14</a>
                    </div>
                </div>
            );
        }
    }
}

export default App;
