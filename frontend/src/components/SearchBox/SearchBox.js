import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div className="p-4">
                <div className="list-filter search-box">
                    <div className="list-filter-main">
                        <form id="form-filter" className="d-flex h-100" method="GET" action="filter/">
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                                    <div class="h-100 d-flex flex-column">
                                        <label for="filter-sort">Sort by</label>
                                    
                                        <select className="form-control mt-auto" id="filter-sort" name="sort">
                                            <option value="updatetime">Time to update</option>
                                            <option value="posttime">Posted time</option>
                                            <option value="year">Year of manufacture</option>
                                        </select>
                                  
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                                    <div class="h-100 d-flex flex-column">
                                        <label for="filter-eptype">Form of purchase</label>
                                        <select
                                            className="form-control mt-auto"
                                            id="filter-eptype"
                                            name="eptype"
                                        >
                                            <option value="">all</option>
                                            <option value="single">installment purchase</option>
                                            <option value="serial">Direct purchase</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                                    <div class="h-100 d-flex flex-column">
                                        <label for="filter-language">Star</label>
                                        <select
                                            className="form-control mt-auto"
                                            id="filter-language"
                                            name="language"
                                        >
                                            <option value="">all</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                                    <div class="h-100 d-flex flex-column">
                                        <label for="filter-country">Country</label>
                                        <select
                                            className="form-control mt-auto"
                                            id="filter-country"
                                            name="country"
                                        >
                                            <option value="">all</option>

                                            <option value="vn">VietNam</option>

                                            <option value="cn">China</option>

                                            <option value="us">USA</option>

                                            <option value="kr" defaultValue="">
                                                korea
                      </option>

                                            <option value="jp">Japan</option>

                                            <option value="hk">HongKong</option>

                                            <option value="in">India</option>

                                            <option value="fr">France</option>

                                            <option value="uk">England</option>

                                            <option value="ca">Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                                    <div class="h-100 d-flex flex-column">
                                        <label for="filter-year">Release year</label>
                                        <select id="filter-year" name="year" className="form-control mt-auto">
                                            <option value="">all</option>

                                            <option value="2020">2020</option>

                                            <option value="2019">2019</option>

                                            <option value="2018">2018</option>

                                            <option value="2017">2017</option>

                                            <option value="2016">2016</option>

                                            <option value="-2016">Before 2016</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                                    <div class="h-100 d-flex">
                                        <button type="submit" id="btn--filter" className="btn btn-red btn-filter btn-primary mt-auto" >
                                            <span>Filter post</span>
                                        </button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
