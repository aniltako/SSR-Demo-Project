(function() {
  let _selectedStar = null
  let _answerCount = 0

  const questionFormStars = document.getElementsByClassName('js-poll')
  const sendButton = document.getElementById('send-reply-btn')
  sendButton.disabled = true

  for (var i = 0; i < questionFormStars.length; i++) {
    const questionFormStar = questionFormStars[i];
    const startElements = questionFormStar.getElementsByClassName('js-poll-item');
  
    for (var j = 0; j < startElements.length; j++) {

      const startElement = startElements[j];
      
      startElement.addEventListener("click", function (e) {
        onClickPoll(questionFormStar, startElement)
      });

      startElement.addEventListener("mouseenter", function(e) {
        onHoverPoll(questionFormStar);
      })

      startElement.addEventListener("mouseleave", function(e) {
        if (_selectedStar)
          setSelect(_selectedStar);
      })
    }
  }

  function onClickPoll(questionFormStar, startElement) {
    setSelect(startElement)
    
    updateAnswerCount()
    updateProgressBar()
    _selectedStar = startElement;
  
    const button = questionFormStar.parentNode.getElementsByTagName('button')[0]
    hide(button)
    const textarea = questionFormStar.parentNode.getElementsByTagName('textarea')[0]
    show(textarea)
  }
  
  function updateAnswerCount() {
    _answerCount = document.getElementsByClassName('js-poll-item is-selected').length
    
    if (_answerCount === 5) {
      document.getElementById('send-reply-btn').disabled = false;
    }
  }
  
  function updateProgressBar() {
    const innerProgressBar = document.getElementsByClassName('progress-bar__inner')[0]
    innerProgressBar.style.width = `${_answerCount*20}%`
  }
  
  function onHoverPoll(questionFormStar) {
    const selectedStartEle = questionFormStar.getElementsByClassName('is-selected')[0]
    if (selectedStartEle) {
      _selectedStar = selectedStartEle
      unSelect(selectedStartEle)
    }
  }

  sendButton.addEventListener("click", function (e) {
    e.preventDefault()
    handleSendReply()
  });


  function handleSendReply() {
    var http = new XMLHttpRequest()
    var url = '/question'
    var data = getFormData()

    http.open('POST', url, true);

    http.setRequestHeader('Content-type', 'application/json')

    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        const response = JSON.parse(http.response)
        if ( response && response.redirect )
          window.location.replace(response.redirect)
      }
    }
    http.send(JSON.stringify(data));
  }

  function getFormData() {
    const questionFormPolls = document.getElementsByClassName('question-form-poll');

    const formData = {}
    const answers = []

    for (let index = 0; index < questionFormPolls.length; index++) {
      const questionFormPollEle = questionFormPolls[index];

      const questionId = questionFormPollEle.getElementsByClassName('question-form-stars')[0]
                          .getAttribute('data-id')
      const comment = questionFormPollEle.getElementsByTagName('textarea')[0].value
      
      answers.push({questionId: questionId, comment: comment})

    }
    formData.answers = answers

    const reply = document.getElementsByClassName('question-form-reply')[0]
                  .getElementsByTagName('textarea')[0].value

    formData.reply = reply

    const moodValue = document.getElementsByClassName('question-mood-value')[0]
                      .getAttribute('data-value')

    formData.moodvalue = moodValue
    return formData
  }
  
})();

function onClickEditMood(mood) {
  const moodButton = document.getElementsByClassName(`question-mood-value__button js-button is-${mood}`)[0]
  setActive(moodButton)

  const selectedMoodEle = document.getElementsByClassName('question-mood-value')[0]
  hide(selectedMoodEle)

  const editMoodEle = document.getElementsByClassName('question-mood-value__changer')[0]
  show(editMoodEle)
}

function onChangeMood(mood) {
  const activeButton = document.getElementsByClassName('question-mood-value__button js-button is-active')[0]
  inActive(activeButton)

  const selectedMoodEle = document.getElementsByClassName('question-mood-value')[0]
  selectedMoodEle.classList = `question-mood-value is-${mood}`
  selectedMoodEle.setAttribute('data-value', mood)

  const editMoodEle = document.getElementsByClassName('question-mood-value__changer')[0]
  hide(editMoodEle)
}