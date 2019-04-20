
all: init

init: .init

.init:
	git submodule update --init --recursive
	@echo "Patching gpt-2-Pytorch"
	cd prediction_service/predictors/gpt-2-Pytorch \
		&& patch -p1 < ../gpt-2-Pytorch.patch
	cd prediction_service/predictors/gpt-2-Pytorch \
		&& curl --output gpt2-pytorch_model.bin https://s3.amazonaws.com/models.huggingface.co/bert/gpt2-pytorch_model.bin
	touch .init