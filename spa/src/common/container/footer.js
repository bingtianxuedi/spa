import React,{Component} from 'react';
// import './footer.css';

class Bottom extends Component{
    constructor(props){
        super(props);
        this.state={
            timer:0
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.tick,1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    tick= () => {
        const {timer} =this.state;
        this.setState({
            timer:timer+1
        })
    }

    render() {
        const {timer} = this.state;
        return(
            <footer>
                <div>
                    <span>© 2018-2019  牧云云</span>
                    <span className=''>
                        您已经在此逗留
                        <span className="timer">{timer}</span>
                        秒
                    </span>
                </div>
            </footer>
        )
    }
}
export default Bottom;