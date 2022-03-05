class Level < ApplicationRecord

  validates :name, presence :true

  enum name: { départemental: 1, régional: 2 }
end
