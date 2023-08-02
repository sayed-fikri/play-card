@php($page = "card")

@extends('card_shuffle.layout')


@section('content')

    <!-- Body: Header -->
    <div class="body-header border-bottom d-flex py-3">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="text-muted">Welcome to PLAY CARD</h3>
                    <small class="text-muted">Please insert number of people.</small>
                </div>
                <div class="col-auto">
                    {{--                    <a href="https://themeforest.net/user/wrraptheme" title="Download" target="_blank" class="btn btn-white border lift">Download</a>--}}
                    {{--                    <button type="button" class="btn btn-dark lift">Generate Report</button>--}}
                </div>
            </div>

{{--            Input total people--}}
            <div class="row justify-content-center">
                <form id="shuffle_card" method="post">

                    <input type="hidden" name="_token" id="_token" value="{{ csrf_token() }}">

                    <div class="row">


                        <div class="col-lg-3">
                            <div class="form-group" align="left">
                                <label for="inputAddress2">Total People <b style="color: red">*</b></label>
                                <input class="form-control"
                                       name="totalPeople"
                                       placeholder="0"
                                       id="totalPeople"
                                       type="number">
                            </div>
                            <p id="error-radio"></p>
                        </div>

                        <div class="col-lg-3" style="padding-top: 10px">
                        <button class="btn btn-primary " style="width:100px;height:40px;color:black;float: left"
                                type="submit" ><i
                                class="fa fa-edit"></i> Shuffle
                        </button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    </div>

    <!-- Body: Body -->
    <div class="body d-flex py-lg-4 py-3">
        <div class="container-fluid">

            <div class="row" id="cardList">



            </div>




        </div>
    </div>


    @include('card_shuffle.viewJS')
@endsection

