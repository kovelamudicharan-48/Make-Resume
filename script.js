function generateResume() {

  const get = (id) => document.getElementById(id);
  const safe = (value) => value ? value : "N/A";

  // Show resume
  get("resume").style.display = "block";

  // Basic Details
  get("rname").innerText = safe(get("name").value);
  get("rrole").innerText = safe(get("role").value);
  get("rphone").innerText = safe(get("phone").value);
  get("remail").innerText = safe(get("email").value);
  get("rlinkedin").innerText = safe(get("linkedin").value);
  get("rgithub").innerText = safe(get("github").value);

  // Objective & Skills
  get("robjective").innerText = safe(get("objective").value);
  get("rskills").innerText = safe(get("skills").value);
  get("racademic").innerText = safe(get("academic").value);
  get("rextra").innerText = safe(get("extra").value);

  // Project
  get("rprojectTitle").innerText =
    safe(get("projectTitle").value);

  get("rprojectDesc").innerText =
    safe(get("projectDesc").value);

  // Internship
  get("rinternCompany").innerText =
    safe(get("internCompany").value);

  get("rinternRole").innerText =
    safe(get("internRole").value);

  get("rinternDesc").innerText =
    safe(get("internDesc").value);

  

  // Personal Details
  get("rdob").innerText =
    formatDate(get("dob").value);

  get("rlanguage").innerText =
    safe(get("language").value);

  get("rnat").innerText =
    safe(get("nationality").value);

  get("rstrength").innerText =
    safe(get("strengths").value);

  // Declaration
  get("rdeclaration").innerText =
    get("declaration").value.trim() ||
    "I hereby declare that the details above are correct and true to the best of my knowledge.";

  // Place & Date
  get("rplace").innerText =
    safe(get("place").value);

  get("rdate").innerText =
    formatDate(get("date").value);

  // Signature Name
  get("rsignName").innerText =
    safe(get("name").value);

  // Photo
  const photoInput = get("photo");

  if (photoInput.files.length > 0) {

    const reader = new FileReader();

    reader.onload = () => {
      get("rphoto").src = reader.result;
    };

    reader.readAsDataURL(
      photoInput.files[0]
    );
  }
}


function addEducation() {

  const get =
    (id) => document.getElementById(id);

  const q =
    get("eq").value.trim();

  const i =
    get("ei").value.trim();

  const b =
    get("eb").value.trim();

  const y =
    get("ey").value.trim();

  const p =
    get("ep").value.trim();

  if (!q || !i || !b || !y || !p) {

    alert(
      "Please fill all education fields!"
    );

    return;
  }

  const table =
    get("eduTable");

  const row =
    table.insertRow(-1);

  row.insertCell(0).innerText = q;
  row.insertCell(1).innerText = i;
  row.insertCell(2).innerText = b;
  row.insertCell(3).innerText = y;
  row.insertCell(4).innerText = p;

  // Clear inputs
  get("eq").value = "";
  get("ei").value = "";
  get("eb").value = "";
  get("ey").value = "";
  get("ep").value = "";
}


function showFresher() {

  document.getElementById(
    "resumeForm"
  ).style.display = "block";
}


function showExperienced() {

  document.getElementById(
    "resumeForm"
  ).style.display = "none";

  document.getElementById(
    "resume"
  ).style.display = "none";

  alert(
    "Experienced Resume template will be added soon!"
  );
}


function formatDate(dateValue) {

  if (!dateValue) {
    return "N/A";
  }

  const parts =
    dateValue.split("-");

  if (parts.length === 3) {

    return (
      parts[2] +
      "/" +
      parts[1] +
      "/" +
      parts[0]
    );
  }

  return dateValue;
}
