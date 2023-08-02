@section('javascript-content')

    <script>
        $(document).ready(function () {


        });




        //Custom table week data for TV
        function getCardShuffle() {

            console.log("Enter input");
            {{--$.getJSON("{{  route('master.summaryProgress') }}", function (data) {--}}

            {{--    // console.log(data);--}}

            {{--    //Table Body--}}
            {{--    $("#realTimeBody").html('');--}}


            {{--    $.each(data, function () {--}}
            {{--        bodyRow = null;--}}
            {{--        var bodyRow = document.createElement("tr");--}}
            {{--        var table_body = '';--}}

            {{--        table_body +=' <th rowspan="'+ this.total_group +'"><a title="Real Time ' + this.production + ' Production " href="{{ route("master.realTimeProductionLine") }}?production=' + this.production + '">' + this.production + '</a></th>';--}}

            {{--        bodyRow.innerHTML = table_body;--}}
            {{--        $("#realTimeBody").append(bodyRow);--}}



            {{--        $.each(this.group_data, function () {--}}
            {{--            bodyRow = null;--}}
            {{--            var bodyRow = document.createElement("tr");--}}
            {{--            var table_body = '';--}}
            {{--            table_body +=' <th>' + this.group + '</th>'--}}
            {{--            table_body +=' <th>' + this.plan + '</th>'--}}
            {{--            table_body +=' <th>' + this.actual + '</th>'--}}
            {{--            table_body +=' <th style="color:'+this.color_label+'">' + this.different + '</th>'--}}
            {{--            table_body +=' <th style="color:'+this.color_label+'">' + this.progress + '</th>'--}}
            {{--            bodyRow.innerHTML = table_body;--}}
            {{--            $("#realTimeBody").append(bodyRow);--}}
            {{--        })--}}

            {{--        bodyRow = null;--}}
            {{--        var bodyRow = document.createElement("tr");--}}
            {{--        bodyRow.style.backgroundColor="darkgrey"--}}
            {{--        var table_body = '';--}}
            {{--        // table_body +=' <th style="background-color: lightgrey"></th>';--}}
            {{--        table_body +=' <th>TOTAL</th>';--}}
            {{--        table_body +=' <th>'+ this.total_all_plan +'</th>';--}}
            {{--        table_body +=' <th>'+ this.total_all_actual +'</th>';--}}
            {{--        table_body +=' <th style="color:'+this.color_label+'">'+ this.total_all_different +'</th>';--}}
            {{--        table_body +=' <th style="color:'+this.color_label+'">'+ this.total_all_progress +'</th>';--}}

            {{--        // table_header += '</tr>'--}}
            {{--        bodyRow.innerHTML = table_body;--}}
            {{--        $("#realTimeBody").append(bodyRow);--}}
            {{--    })--}}


            {{--});--}}


        }


        $("form#shuffle_card").submit(function (e) {

            e.preventDefault();
            var formData = new FormData(this);
            // console.log(formData);

            $.ajax({
                url: "{{ route('card.shuffleCard') }}",
                type: 'POST',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    console.log(data);

                    if (data.status == "fail") {
                        $("#cardList").html('')

                        toastr.options.closeButton = true;
                        $context = "error";
                        $message = data.message;
                        $position = "bottom-right";

                        if ($context === '') {
                            $context = 'info';
                        }

                        if ($position === '') {
                            $positionClass = 'toast-bottom-right';
                        } else {
                            $positionClass = 'toast-' + $position;
                        }

                        toastr.remove();
                        toastr[$context]($message, '', {
                            positionClass: $positionClass
                        });
                        act = null;

                    } else {

                        //Refresh table
                        // console.log(date);
                        $("#cardList").html('')
                        $("#cardList").html('');


                        // List of all data
                        $.each(data, function (person) {
                            bodyRow = null;
                            var bodyRow = document.createElement("tr");
                            var listCard = '<th><i class="fa fa-user"></i></th>';

                            //Card length for comparison
                            var totalCard = this.length;
                            $.each(this, function (index) {
                                console.log(index)
                                if(index+1 == totalCard){
                                    listCard += ' <th>' + this + '</th>'
                                }else{
                                    listCard += ' <th>' + this + ',</th>'
                                }
                            })

                            bodyRow.innerHTML = listCard;
                            $("#cardList").append(bodyRow);

                        })


                    }


                }
            });







        });





    </script>

@endsection
