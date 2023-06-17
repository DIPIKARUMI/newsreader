import React, { Component } from 'react'

export class NewsItems extends Component {
    
  render() {
    let{title,description,imageUrl,newsUrl,author ,date} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imageUrl?"https://images.cnbctv18.com/wp-content/uploads/2019/11/power-electricity.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small>By {!author? "Unknown" :author} on {new Date(date).toGMTString()}</small></p>

                <a  href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">Read more</a>
            </div>
            </div>
            
      </div>
    )
  }
}

export default NewsItems
