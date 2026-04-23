const photos = [
  "assets/c__Users_uni_AppData_Roaming_Cursor_User_workspaceStorage_2afea92d850d166265320cd72457581a_images_WhatsApp_Image_2026-04-23_at_12.54.32-3c16fd39-e0d6-4b80-867d-a309eca3d3cc.png",
  "assets/c__Users_uni_AppData_Roaming_Cursor_User_workspaceStorage_2afea92d850d166265320cd72457581a_images_WhatsApp_Image_2026-04-23_at_12.53.01-fcb6a21d-eae4-46f2-a9d1-4e80c37c6914.png"
];

const cvPath = "file:///C:/Users/uni/AppData/Roaming/Cursor/User/workspaceStorage/2afea92d850d166265320cd72457581a/pdfs/d549caa4-9198-4400-8d73-b07a0696496c/CV-Mbajoun%20-%20Ingenieur%20test%20et%20validation.pdf";

let currentPhotoIndex = 0;

const heroPhoto = document.getElementById("hero-photo");
const cvLink = document.getElementById("cv-link");
const yearEl = document.getElementById("year");

if (heroPhoto) {
  heroPhoto.src = photos[currentPhotoIndex];
}

if (cvLink) {
  cvLink.href = cvPath;
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
