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

export const createPokemon = (pokemon, success, error) => {
  console.log("ajax");
  $.ajax({
    url: `/api/pokemon`,
    type: "POST",
    dataType: "json",
    data: { pokemon },
    success,
    error
  });
};
