class QuestionsController < ApplicationController

  def index
    @questions = policy_scope(Question).order(created_at: :desc)
    @questions = @questions.filter_by_level(params[:level]) if params[:level].present?
    @questions = @questions.filter_by_category(params[:category]) if params[:category].present?
  end

  def show
    @question = Question.find(params[:id])
  end

  def new
    authorize @question
    @question = Question.new
  end

  def create
    authorize @question
    @question = Question.new(question_params)
    if @question.save
      redirect_to question_path(@question)
    else
      render :new
    end
  end

  def edit
    authorize @question
    @question = Question.find(params[:id])
  end

  def update
    authorize @question
    @question.update(question_params)
    redirect_to question_path(@question)
  end

  def destroy
    authorize @question
    @question= Question.find(params[:id])
    @question.destroy
    redirect_to root_path
  end

  private

  def question_params
    params.require(:question).permit(:statement, :prop_one, :prop_two, :prop_three)
  end
end
