import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div className="comment_detail d-flex pt-2">
                <div className="comment_avatar rounded-circle mr-3"><img style="width: 40px" className="comment_avatar rounded-circle"
                    src="https://avatar-redirect.appspot.com/google/106274965921876463717?size=400" alt="d" /></div>
                <div className="comment_comment">
                    <div className="comment_comment  px-3 py-2" style="background-color: #d1cece; border-radius: 20px;">
                        <span className="comment_comment font-weight-bold">dang thuyen Vuong</span>
                        <div className="d-flex">
                            <div className="my-rating  " data-rating="4"></div>
                        </div>
                        <div className="comment_comment"><span>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</span>
                        </div>
                    </div>
                    <div className="comment_commentTime px-3" style="color: #8b8a8a">
                        <p className="comment_createdAt">6 ngày trước</p>
                    </div>
                </div>
            </div>
        )
    }
}
