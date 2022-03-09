require 'will_paginate/array' #needed to work with arrays

class QuestionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  before_action :set_question, only: [:show, :edit, :update, :destroy]

  def index
    @questions = policy_scope(Question).order(created_at: :desc)
    @questions = @questions.filter_by_level(params[:level]) if params[:level].present?
    @questions = @questions.filter_by_category(params[:category]) if params[:category].present?
    @questions = @questions.shuffle
    @questions = @questions.paginate(page: params[:page], per_page: 1)
  end

  def show
  end

  def new
    @user = current_user
    @question = Question.new
    @question.user = @user
    authorize @question
  end

  def create
    @user = current_user
    @question = Question.new(question_params)
    @question.user = @user
    authorize @question
    if @question.save
      redirect_to question_path(@question)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @question.update(question_params)
      redirect_to question_path(@question)
    else
      render :edit
    end
  end

  def destroy
    @question.destroy
    redirect_to root_path
  end

  private

  def set_question
    @question = Question.find(params[:id])
    authorize @question
  end

  def question_params
    params.require(:question).permit(:statement, :prop_one, :prop_two, :prop_three, :level, :category)
  end
end
