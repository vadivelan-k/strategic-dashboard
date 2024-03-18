class User < ApplicationRecord
  has_many :leaves, class_name: 'Leave'
end
