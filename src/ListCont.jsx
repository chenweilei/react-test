import React, {Component} from 'react'

export default class ListCont extends Component{
	constructor(props){
		super(props)
		this.state = {
			aShow: []
		}
	}
	componentWillMount(){
		console.log('ListCont: componentWillMount')
	}
	componentWillReceiveProps(props){
		console.log('ListCont: componentWillReceiveProps')
		this.setState({
			aShow: new Array(props.list.length).fill(false)
		})		
	}
	onClick(key, e){
		let arr = this.state.aShow.slice(0);
		arr[key] = !arr[key];
		this.setState({
			aShow: arr
		})
	}
	onClickPlayAudio(key, e){
		this.refs['audio'+key].play();
	}
	getList(){
		let data = this.props.list;
		data = data.map((val, key) => {
			let {id, title, cont, audio} = val;

			return(
				<div key={key} style={{borderBottom: '1px silid #e5e5e5', display: (this.props.searchShowId === null || this.props.searchShowId === id ) ?'block': 'none'}}>	
					<a onClick={this.onClick.bind(this, key)} className="weui-cell weui-cell_access" href="javascript:;">
						<div className="weui-cell__bd">
							<p>{title}</p>
						</div>
						<div className="weui-cell__ft">
						</div>
					</a>
					<div style={{display: this.state.aShow[key]?'block':'none'}}>
						<div className="weui-article">
							<p>{cont}</p>
							<div onClick={this.onClickPlayAudio.bind(this, key)} className="play-audio">
								<img src="./images/audio.jpg" alt="" />
								<audio ref={`audio${key}`} src={`./images/${audio}`}></audio>
							</div>
						</div>
					</div>
				</div>
			)
		})
		return data;
	}

	render(){
		return (
			<div className="weui-cells" id="list">
				{this.getList()}

			</div>		
		)
	}
}