class Level < ApplicationRecord

  has_many :questions

  validates :name, presence :true

  enum name: { départemental: 1, régional: 2 }
end
