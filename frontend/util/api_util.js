export const fetchAllPokemon = success => {
  $.ajax({
    url: "/api/pokemon",
    type: "GET",
    dataType: "json",
    success
  });
};
