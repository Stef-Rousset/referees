class AddColumnLevelToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :level, :integer
  end
end
