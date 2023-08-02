<!doctype html>
<html class="no-js " lang="en" data-theme="dark">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Random card shuffling">
    <meta name="keyword" content="Custom Play Card">
    <title>Play Card</title>
    <link rel="icon" href="{{ asset('img/play-card.png') }}" type="image/x-icon">

    <!-- project css file  -->
    <link rel="stylesheet" href="{{ asset('aluiAdmin/assets/css/al.style.min.css') }}">

    <!-- project layout css file -->
    <link rel="stylesheet" href="{{ asset('aluiAdmin/assets/css/layout.a.min.css') }}">

</head>

<body class="font-nunito">


<div id="layout-a" class="theme-blue">

    <!-- Navigation -->
    {{--    @include('master.navbar')--}}

    <!-- sidebar -->
    {{--    @include('master.sidebar')--}}
    @include('card_shuffle.top-bar')

    <!-- main body area -->
    <div class="main px-lg-4 px-md-3">
        <br><br>
        @yield('content')

        <!-- Body: Footer -->
        @include('card_shuffle.footer')

    </div>


    <!-- Modal: Layout -->
    @yield('modal-content')
    

</div>

<!-- Jquery Core Js -->
<script src="{{ asset('aluiAdmin/assets/bundles/libscripts.bundle.js') }}"></script>
<script src="{{ asset('aluiAdmin/assets/plugin/rating/jquery.fontstar.js') }}"></script>
<script src="{{ asset('aluiAdmin/assets/bundles/toastr.bundle.js') }}"></script>

<!-- Jquery Page Js -->
<script src="{{ asset('aluiAdmin/assets/js/template.js') }}"></script>
{{--<script src="../../js/page/index.js"></script>--}}

<script>
    $(".sa-title-text").on('click', function () {
        Swal.fire(
            'Coming Soon',
            'The page is under development',
            'success'
        )
    });

</script>

@yield('javascript-content')
</body>
</html>
