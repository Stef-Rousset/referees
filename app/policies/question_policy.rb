class QuestionPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def new?
    user.role == "contributor" || user.role == "admin"
  end

  def create?
    user.role == "contributor" || user.role == "admin"
  end

  def edit?
    record.user == user || user.role == "admin"
  end

  def update?
    record.user == user || user.role == "admin"
  end

  def destroy?
    record.user == user || user.role == "admin"
  end

end
