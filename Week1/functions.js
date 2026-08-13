// declaration (hoisted)
function add(a, b) {
  return a + b;
}
// expression (not hoisted)
const sub = function (a, b) {
  return a - b;
};
