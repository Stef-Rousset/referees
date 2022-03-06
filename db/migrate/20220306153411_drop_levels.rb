class DropLevels < ActiveRecord::Migration[6.1]
  def change
    drop_table :levels
  end
end
