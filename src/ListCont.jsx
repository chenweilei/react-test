import React, {Component} from 'react'

export default class ListCont extends Component{
	
	getList(){
		let data = this.props.list;

		data = data.map((val, key) => {
			let {id, title, cont, audio} = val;

			return(
				<div style={{borderBottom: '1px silid #e5e5e5'}}>	
					<a className="weui-cell weui-cell_access" href="javascript:;">
						<div className="weui-cell__bd">
							<p>1.用户名用户名用户名用户名用户名用户名用户名用户名用户名用户名用户名</p>
						</div>
						<div className="weui-cell__ft">
						</div>
					</a>
					<div>
						<div className="weui-article">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.                        
							</p>
							<div className="play-audio">
								<img src="./images/login/audio.png" alt="" />
								<audio src="./images/login/endbgm.MP3"></audio>
							</div>
						</div>
					</div>
				</div>
			)
		})
	}

	render(){
		return (
			<div className="weui-cells" id="list">
				{this.getList()}

			</div>		
		)
	}
}