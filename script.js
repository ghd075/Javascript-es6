document.getElementById('show-answer1').addEventListener('click', function() {
  toggleCodeBlock(1);
});

document.getElementById('run-code1').addEventListener('click', function() {
  runCode(1);
});

document.getElementById('show-answer2').addEventListener('click', function() {
  toggleCodeBlock(2);
});

document.getElementById('run-code2').addEventListener('click', function() {
  runCode(2);
});

document.getElementById('show-answer3').addEventListener('click', function() {
  toggleCodeBlock(3);
});

document.getElementById('run-code3').addEventListener('click', function() {
  runCode(3);
});

document.getElementById('show-answer4').addEventListener('click', function() {
  toggleCodeBlock(4);
});

document.getElementById('run-code4').addEventListener('click', function() {
  runCode(4);
});

document.getElementById('show-answer5').addEventListener('click', function() {
  toggleCodeBlock(5);
});

document.getElementById('run-code5').addEventListener('click', function() {
  runCode(5);
});

document.getElementById('show-answer6').addEventListener('click', function() {
  toggleCodeBlock(6);
});

document.getElementById('run-code6').addEventListener('click', function() {
  runCode(6);
});

document.getElementById('show-answer7').addEventListener('click', function() {
  toggleCodeBlock(7);
});

document.getElementById('run-code7').addEventListener('click', function() {
  runCode(7);
});

document.getElementById('show-answer8').addEventListener('click', function() {
  toggleCodeBlock(8);
});

document.getElementById('run-code8').addEventListener('click', function() {
  runCode(8);
});

document.getElementById('show-answer9').addEventListener('click', function() {
  toggleCodeBlock(9);
});

document.getElementById('run-code9').addEventListener('click', function() {
  runCode(9);
});

function toggleCodeBlock(number) {
  let codeBlock = document.getElementById(`code-block${number}`);
  let runButton = document.getElementById(`run-code${number}`);
  let output = document.getElementById(`output${number}`);

  if (codeBlock.style.display === 'none') {
      codeBlock.style.display = 'block';
      runButton.style.display = 'block';
      document.getElementById(`show-answer${number}`).textContent = '정답 숨기기';
  } else {
      codeBlock.style.display = 'none';
      runButton.style.display = 'none';
      output.style.display = 'none';
      document.getElementById(`show-answer${number}`).textContent = '정답보기';
  }
}

function runCode(number) {
  let code = document.querySelector(`#code-block${number} code`).textContent;
  let outputElement = document.getElementById(`code-output${number}`);
  let outputDiv = document.getElementById(`output${number}`);

  try {
      let result = eval(code);
      outputElement.textContent = result !== undefined ? result : '코드가 실행되었습니다. 콘솔을 확인하세요.';
  } catch (e) {
      outputElement.textContent = '오류: ' + e.message;
  }

  outputDiv.style.display = 'block';
}

let backToTop = () => {
  // Scroll | button show/hide
  window.addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop > 100) {
      document.getElementById('go-top').style.display = "block";
    } else {
      document.getElementById('go-top').style.display = "none";
    }
  });
  // back to top
  document.getElementById('go-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
};
backToTop();