class Category < ApplicationRecord

  has_many :questions

  validates :name, presence :true

  enum name: { généralités: 1, fleuret: 2, épée: 3, sabre: 4}
end
