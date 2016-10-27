export const fetchAllPokemon = success => {
  $.ajax({
    url: "/api/pokemon",
    type: "GET",
    dataType: "json",
    success
  });
};

export const fetchPokemon = (id, success) => {
  $.ajax({
    url: `/api/pokemon/${id}`,
    type: "GET",
    dataType: "json",
    success
  });
};
