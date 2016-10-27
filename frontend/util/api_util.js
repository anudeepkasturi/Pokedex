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

export const createPokemon = (data, success) => {
  $.ajax({
    url: `/api/pokemon`,
    type: "POST",
    dataType: "json",
    data,
    success
  });
};
