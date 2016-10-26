class Api::PokemonController < ApplicationController
  before_action :set_pokemon, only: [:show]

  def index
    @pokemon = Pokemon.all
  end

  def show
  end

  private

  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end
end
