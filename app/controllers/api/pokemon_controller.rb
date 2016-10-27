class Api::PokemonController < ApplicationController
  before_action :set_pokemon, only: [:show]

  def index
    @pokemon = Pokemon.all
  end

  def show
  end

  def create

  end

  private

  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves: [], items: [])
  end
end
