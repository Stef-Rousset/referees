class Question < ApplicationRecord
  belongs_to :category
  belongs_to :level
  belongs_to :user

  validates :statement, presence :true, length: { minimum: 2}
  validates :prop_one, presence :true, length: { minimum: 2}
  validates :prop_two, presence :true, length: { minimum: 2}
  validates :prop_three, presence :true, length: { minimum: 2}

  scope :general, -> { joins(:categories).where(name: 1) }
  scope :fleuret, -> { joins(:categories).where(name: 2) }
  scope :epee, -> { joins(:categories).where(name: 3) }
  scope :sabre, -> { joins(:categories).where(name: 4) }
  scope :departemental, -> { joins(:levels).where(name: 1) }
  scope :regional, -> { joins(:levels).where(name: 2) }

  def filter_by_level(level_name)
    levels = Level.arel_table
    joins(:levels)
    .where(levels[:name].eq(level_name))
  end

  def filter_by_category(category_name)
    categories =  Category.arel_table
    joins(:categories)
    .where(catgories[:name].eq(category_name))
  end
end
