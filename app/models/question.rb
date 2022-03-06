class Question < ApplicationRecord
  belongs_to :user

  validates :level, presence: true
  validates :category, presence: true
  validates :statement, presence: true, length: { minimum: 2}
  validates :prop_one, presence: true, length: { minimum: 2}
  validates :prop_two, presence: true, length: { minimum: 2}
  validates :prop_three, presence: true, length: { minimum: 2}

  enum level: { départemental: 1, régional: 2}
  enum category: { généralités: 1, fleuret: 2, épée: 3, sabre: 4}

  def filter_by_level(level)
    where(level: level)
  end

  def filter_by_category(category)
    where(category: category)
  end
end
