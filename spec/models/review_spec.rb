require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should have_valid(:rating).when(3)}
  it { should have_valid(:body).when("i am reviewing this.")}

  it { should_not have_valid(:rating).when(nil, "", 6, -1, "three") }
end
