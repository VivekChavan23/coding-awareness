  // ================= TAB SWITCHING (Student vs Teacher Survey) =================
  function showSurveyTab(tabName) {
      const studentsPanel = document.getElementById('studentsPanel');
      const teachersPanel = document.getElementById('teachersPanel');
      const btnStudents = document.getElementById('btnStudents');
      const btnTeachers = document.getElementById('btnTeachers');

      if (tabName === 'students') {
          studentsPanel.classList.add('active');
          teachersPanel.classList.remove('active');
          btnStudents.classList.add('active');
          btnTeachers.classList.remove('active');
      } else {
          teachersPanel.classList.add('active');
          studentsPanel.classList.remove('active');
          btnTeachers.classList.add('active');
          btnStudents.classList.remove('active');
      }
  }

  // ================= INTERACTIVE MINI QUIZ =================
  function checkAnswer(buttonElement, isCorrect) {
      const resultDiv = document.getElementById('quizResult');
      const allButtons = document.querySelectorAll('.quiz-btn');

      // Reset button styles
      allButtons.forEach(btn => {
          btn.style.backgroundColor = '';
          btn.style.color = '';
          btn.style.borderColor = '';
      });

      if (isCorrect) {
          buttonElement.style.backgroundColor = '#10b981';
          buttonElement.style.color = '#ffffff';
          buttonElement.style.borderColor = '#10b981';
          resultDiv.style.color = '#10b981';
          resultDiv.innerHTML = "✅ CORRECT ANSWER.";
      } else {
          buttonElement.style.backgroundColor = '#ef4444';
          buttonElement.style.color = '#ffffff';
          buttonElement.style.borderColor = '#ef4444';
          resultDiv.style.color = '#ef4444';
          resultDiv.innerHTML = "❌ WRONG ANSWER PLEASE TRY AGAIN.";
      }
  }

  // Smooth scroll for nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });