// script.js

document.addEventListener("DOMContentLoaded", function () {
  // 학교 신청 폼
  const schoolForm = document.querySelector("#apply form");
  if (schoolForm) {
    schoolForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const school = schoolForm.school.value.trim();
      const date = schoolForm.date.value;
      const students = schoolForm.students.value;

      if (!school || !date || !students) {
        alert("모든 항목을 입력해 주세요.");
        return;
      }

      alert(`"${school}"의 체험학습 요청이 접수되었습니다.\n\n보조인력이 자동 매칭됩니다.`);
      schoolForm.reset();
    });
  }

  // 보조인력 등록 폼
  const joinForm = document.querySelector("#join form");
  if (joinForm) {
    joinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = joinForm.name.value.trim();
      const phone = joinForm.phone.value.trim();
      const region = joinForm.region.value.trim();

      if (!name || !phone || !region) {
        alert("모든 항목을 입력해 주세요.");
        return;
      }

      alert(`"${name}"님, 등록 신청이 완료되었습니다.\n\n인증 심사 후 매칭 요청을 받게 됩니다.`);
      joinForm.reset();
    });
  }
});
