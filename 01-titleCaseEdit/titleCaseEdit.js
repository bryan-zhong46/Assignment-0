function titleCaseEdit(title) {
  const words = title.split(" ");
  const titleWords = words.map(
    word => word[0].toUpperCase() + word.slice(1));
  const titleCase = titleWords.join(" ")
  return titleCase
}

// Do not edit this line;
module.exports = titleCaseEdit;