import React, {Component} from 'react'

export default class ListSearch extends Component{
	constructor(props){
		super(props)
		this.state = {
			inputShow: false,
			value: '',
			listdata: [],
		}
	}
	componentWillMount(){
		//console.log('children: componentWillMount')
		//console.log(this.props.listdata)
	}
	componentDidMount(){
		///console.log('children: componentDidMount')
	}
	componentWillReceiveProps(props){
		//console.log('children: componentWillReceiveProps')
		//console.log(props)
		this.data = props.listdata
	}
	onClick(){
		this.setState({
			inputShow: true
		})
		this.refs.input.focus()

	}
	onChange(e){
		let val = e.target.value;

		this.setState({
			value: val
		}, () =>{
			let data = this.data.slice(0);

			data = data.filter((json, key) => {
				let {id, title, cont, audio} = json;

				if(val===''){
					return false
				}else{
					return title.indexOf(val) !== -1;
				}
			})
			this.setState({
				listdata: data
			})
		})
	}
	onClickCancel(){
		this.props.onClickCancel();
		this.setState({
			inputShow: false,
			value: '',
		})
	}
	onClickSearch(id){
		this.props.onClickSearch(id);
		this.setState({
			listdata: []
		})
	}
	getFilterList(){

		return this.state.listdata.map((val, key) =>{
			return (
 				<div key={key} onClick={this.onClickSearch.bind(this, val.id)} className="weui-cell weui-cell_access">
					<div className="weui-cell__bd weui-cell_primary">
						<p>{val.title}</p>
					</div>
				</div>
			)
		})

	}
	render(){
		return (
			<div>
				<div className="page__bd">
					<div className={`weui-search-bar ${this.state.inputShow ? 'weui-search-bar_focusing':null}`} id="searchBar">
						<form className="weui-search-bar__form">
							<div className="weui-search-bar__box">
								<i className="weui-icon-search"></i>
								<input type="search" className="weui-search-bar__input" ref="input" value={this.state.value} onChange={this.onChange.bind(this)}  id="searchInput" placeholder="搜索" required/>
								<a href="javascript:" className="weui-icon-clear" id="searchClear"></a>
							</div>
							<label className="weui-search-bar__label" id="searchText" style={{display: this.state.inputShow?'none':'block'}} onClick={this.onClick.bind(this)}>
								<i className="weui-icon-search"></i>
								<span>搜索</span>
							</label>
						</form>
						<a href="javascript:" className="weui-search-bar__cancel-btn" onClick={this.onClickCancel.bind(this)} id="searchCancel">取消</a>
					</div>
					<div className="weui-cells searchbar-result" style={{display: !!this.state.listdata?'block':'none'}}>
						{this.getFilterList()}
					</div>
				</div>
			</div>
		)
	}
}