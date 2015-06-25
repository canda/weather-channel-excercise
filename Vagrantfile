Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty32"

  config.vm.network "forwarded_port", guest: 80, host: 50080
  config.vm.network "forwarded_port", guest: 3000, host: 30000
  config.vm.network "forwarded_port", guest: 3001, host: 30001
  config.vm.network "forwarded_port", guest: 3002, host: 30002

  config.vm.synced_folder "src", "/opt/src"

  config.vm.provider "virtualbox" do |vb|
     vb.memory = "1024"
  end

  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.provision :shell, path: "startup.sh", run: "always"
end
