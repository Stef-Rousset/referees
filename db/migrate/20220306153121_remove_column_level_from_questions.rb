class RemoveColumnLevelFromQuestions < ActiveRecord::Migration[6.1]
  def change
    remove_column :questions, :level_id
  end
end
