/* Replace the string of characters in the global variables below with the 
share link to your Google Spreadsheet.
Grab only the characters between "https://docs.google.com/spreadsheets/d/" 
and  "/edit?usp=sharing" in the URL. 
Then add "/1", "/2", etc. to point to a specific tab in the spreadsheet. 
These indexes are 1-based and determined automatically. */

var tab_jobs = "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/1";
var tab_education = "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/2";
var tab_projects = "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/3";
var tab_awards = "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/4";
var tab_skills = "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/5";

/* If you change any of the variable names above, 
make sure to update them throughout the document as well! */

$(document).ready(function () {
  /* -------------------------------------------------------------------------- */
  /*                                     JOBS                                   */
  /* -------------------------------------------------------------------------- */
  $.getJSON("https://opensheet.elk.sh/" + tab_jobs, function (data) {
    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        let div = $(
          "<div class='content-chunk'><h3>" +
            row.Organization + // update each of these according to your own column names (e.g. "row.Company")
            "</h3>" +
            "<p class='position'>" +
            row.Position +
            "</p>" +
            "<p class='location-time'>" +
            row.Location +
            "  ⁕  " +
            row.Time +
            "</p>" +
            "<p class='description'>" +
            row.Description +
            "</p></div>"
        ).appendTo("div#jobs-container");
      }
    });
  });
});

/* -------------------------------------------------------------------------- */
/*                                  EDUCATION                                 */
/* -------------------------------------------------------------------------- */
$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + tab_education, function (data) {
    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        let div = $(
          "<div class='content-chunk'><h3>" +
            row.Institution +
            "</h3>" +
            "<p class='degree'>" +
            row.Degree +
            "</p>" +
            "<p class='location-time'>" +
            row.Location +
            "  ⁕  " +
            row.Time +
            "</p>" +
            "<p class='description'>" +
            row.Description +
            "</p></div>"
        ).appendTo("div#education-container");
      }
    });
  });
});

/* -------------------------------------------------------------------------- */
/*                                  PROJECTS                                  */
/* -------------------------------------------------------------------------- */
$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + tab_projects, function (data) {
    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        let div = $(
          "<div class='content-chunk'><h3>" +
            row.Title +
            "</h3>" +
            "<p class='location-time'>" +
            row.Time +
            "</p>" +
            "<p class='description'>" +
            row.Description +
            "</p></div>"
        ).appendTo("div#projects-container");
      }
    });
  });
});

/* -------------------------------------------------------------------------- */
/*                                   AWARDS                                   */
/* -------------------------------------------------------------------------- */
$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + tab_awards, function (data) {
    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        let div = $(
          "<div class='content-chunk'><h3>" +
            row.Award +
            "</h3>" +
            "<p class='location-time'>" +
            row.Time +
            "</p>" +
            "<p class='description'>" +
            row.Description +
            "</p></div>"
        ).appendTo("div#awards-container");
      }
    });
  });
});

/* -------------------------------------------------------------------------- */
/*                                   SKILLS                                   */
/* -------------------------------------------------------------------------- */
$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + tab_skills, function (data) {
    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        let div = $(
          "<div class='skills-chunk'><p>" + row.Skill + "</p></div>"
        ).appendTo("div#skills-container");
      }
    });
  });
});
