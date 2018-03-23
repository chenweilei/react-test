import React, {Component} from 'react'

export default class ListLogin extends Component{

	onChange(name, e){
		this.props.onChange(name, e.target.value)
	}
	render(){
		return (
			<div>
				<div className="weui-cells weui-cells_form">
					<div className="weui-cell">
						<div className="weui-cell__hd"><label className="weui-label">用户名</label></div>
						<div className="weui-cell__bd">
							<input className="weui-input" type="text" onChange={this.onChange.bind(this, 'userName')} value={this.props.userName} placeholder="请输入用户名"/>
						</div>
					</div>
					<div className="weui-cell">
						<div className="weui-cell__hd"><label className="weui-label">密码</label></div>
						<div className="weui-cell__bd">
							<input className="weui-input" type="password" onChange={this.onChange.bind(this, 'passWord')} value={this.props.passWord} placeholder="请输入密码"/>

						</div>
					</div>
				</div>
				<div className="weui-btn-area">
					<a className="weui-btn weui-btn_primary" onClick={() => {this.props.loginEnter()}} href="javascript:" id="showTooltips">确定</a>
				</div>
			</div>
		)
	}
}