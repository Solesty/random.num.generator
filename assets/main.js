$(document).ready(function () {

    $('#pick_one_button').on('click', function () {

        var max_num = $('#max_num').val();
        var min_num = $('#min_num').val();

        max_num = max_num.split('AS')[1];
        min_num = min_num.split('AS')[1];

        max_num = Number.parseInt(max_num);
        min_num = Number.parseInt(min_num);


        if (min_num < max_num) {

            var counter = 1;

            var id = setInterval(function () {
                console.log(counter + " counter");
                if (counter === 50) {
                    clearInterval(id);
                } else {
                    counter++;
                }

                var temp_number = Math.random();
                temp_number = Math.random() * (+max_num - +min_num) + +min_num;
                temp_number = Math.trunc(temp_number);

                if (temp_number < 10) {
                    temp_number = "0" + temp_number;
                }
                $('#generatednum').text("AS" + temp_number);
            }, 75);

        } else {
            alert("Minimum Number  must be less than Maximum Number");
        }

    });
});