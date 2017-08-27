  (function(){

    $(function(){

      let answer;
      let question;
      let value;
      let category;
      let submit_btn;
      let total = 0;

      function getQuestion(){
        $.get("http://jservice.io/api/random", function(data){
          answer = data[0].answer
          question = data[0].question
          value = data[0].value
          category = data[0].category.title
          // $("#question_returned").html(data[0].question)
          $("#answer_returned").html(answer)
          $("#question_returned").html(question)
          $("#value_returned").html(value)
          $("#category_returned").html(category)
          console.log("What is " + answer)
          console.log(question)
          console.log(value)
          console.log(category)
        })
      }

      getQuestion();

      //button click, basic-addon1, make visibility: visible
      $("#basic-addon1" ).click(function() {

        submit_btn = $("#basic-addon1").val();
        $("#answer_returned").show();

        $("#score_tl").html(total);
        console.log($("#userAnswer").val())
        if(answer.toLowerCase() === $("#userAnswer").val().toLowerCase()){
          total = total + value;
          console.log("Correct: you rule--awsome!")
          $("#userAnswer").val() = '';
        }else{
          console.log("Wrong!")
        }
      });
      // $("")   button glick=-get next question
      $("#new_question" ).click(function() {
        $("#answer_returned").hide();
        getQuestion();
      })
    })

  })()
