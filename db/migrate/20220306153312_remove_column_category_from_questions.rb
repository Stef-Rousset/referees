class RemoveColumnCategoryFromQuestions < ActiveRecord::Migration[6.1]
  def change
    remove_column :questions, :category_id
  end
end
